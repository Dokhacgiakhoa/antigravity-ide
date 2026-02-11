# Pattern 7: Monitoring and Debugging

```python
# Enable detailed metrics
spark.conf.set("spark.sql.codegen.wholeStage", "true")
spark.conf.set("spark.sql.execution.arrow.pyspark.enabled", "true")

# Explain query plan
df.explain(mode="extended")
# Modes: simple, extended, codegen, cost, formatted

# Get physical plan statistics
df.explain(mode="cost")

# Monitor task metrics
def analyze_stage_metrics(spark):
    """Analyze recent stage metrics"""
    status_tracker = spark.sparkContext.statusTracker()

    for stage_id in status_tracker.getActiveStageIds():
        stage_info = status_tracker.getStageInfo(stage_id)
        print(f"Stage {stage_id}:")
        print(f"  Tasks: {stage_info.numTasks}")
        print(f"  Completed: {stage_info.numCompletedTasks}")
        print(f"  Failed: {stage_info.numFailedTasks}")

# Identify data skew
def check_partition_skew(df):
    """Check for partition skew"""
    partition_counts = (df
        .withColumn("partition_id", F.spark_partition_id())
        .groupBy("partition_id")
        .count()
        .orderBy(F.desc("count")))

    partition_counts.show(20)

    stats = partition_counts.select(
        F.min("count").alias("min"),
        F.max("count").alias("max"),
        F.avg("count").alias("avg"),
        F.stddev("count").alias("stddev")
    ).collect()[0]

    skew_ratio = stats["max"] / stats["avg"]
    print(f"Skew ratio: {skew_ratio:.2f}x (>2x indicates skew)")
```

## Configuration Cheat Sheet

```python
# Production configuration template
spark_configs = {
    # Adaptive Query Execution (AQE)
    "spark.sql.adaptive.enabled": "true",
    "spark.sql.adaptive.coalescePartitions.enabled": "true",
    "spark.sql.adaptive.skewJoin.enabled": "true",

    # Memory
    "spark.executor.memory": "8g",
    "spark.executor.memoryOverhead": "2g",
    "spark.memory.fraction": "0.6",
    "spark.memory.storageFraction": "0.5",

    # Parallelism
    "spark.sql.shuffle.partitions": "200",
    "spark.default.parallelism": "200",

    # Serialization
    "spark.serializer": "org.apache.spark.serializer.KryoSerializer",
    "spark.sql.execution.arrow.pyspark.enabled": "true",

    # Compression
    "spark.io.compression.codec": "lz4",
    "spark.shuffle.compress": "true",

    # Broadcast
    "spark.sql.autoBroadcastJoinThreshold": "50MB",

    # File handling
    "spark.sql.files.maxPartitionBytes": "128MB",
    "spark.sql.files.openCostInBytes": "4MB",
}
```

## Best Practices
# Pattern 4: Memory Tuning

```python
# Executor memory configuration
# spark-submit --executor-memory 8g --executor-cores 4

# Memory breakdown (8GB executor):
# - spark.memory.fraction = 0.6 (60% = 4.8GB for execution + storage)
#   - spark.memory.storageFraction = 0.5 (50% of 4.8GB = 2.4GB for cache)
#   - Remaining 2.4GB for execution (shuffles, joins, sorts)
# - 40% = 3.2GB for user data structures and internal metadata

spark = (SparkSession.builder
    .config("spark.executor.memory", "8g")
    .config("spark.executor.memoryOverhead", "2g")  # For non-JVM memory
    .config("spark.memory.fraction", "0.6")
    .config("spark.memory.storageFraction", "0.5")
    .config("spark.sql.shuffle.partitions", "200")
    # For memory-intensive operations
    .config("spark.sql.autoBroadcastJoinThreshold", "50MB")
    # Prevent OOM on large shuffles
    .config("spark.sql.files.maxPartitionBytes", "128MB")
    .getOrCreate())

# Monitor memory usage
def print_memory_usage(spark):
    """Print current memory usage"""
    sc = spark.sparkContext
    for executor in sc._jsc.sc().getExecutorMemoryStatus().keySet().toArray():
        mem_status = sc._jsc.sc().getExecutorMemoryStatus().get(executor)
        total = mem_status._1() / (1024**3)
        free = mem_status._2() / (1024**3)
        print(f"{executor}: {total:.2f}GB total, {free:.2f}GB free")
```
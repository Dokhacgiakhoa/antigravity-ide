# 2. Key Performance Factors

| Factor | Impact | Solution |
|--------|--------|----------|
| **Shuffle** | Network I/O, disk I/O | Minimize wide transformations |
| **Data Skew** | Uneven task duration | Salting, broadcast joins |
| **Serialization** | CPU overhead | Use Kryo, columnar formats |
| **Memory** | GC pressure, spills | Tune executor memory |
| **Partitions** | Parallelism | Right-size partitions |

## Quick Start

```python
from pyspark.sql import SparkSession
from pyspark.sql import functions as F

# Create optimized Spark session
spark = (SparkSession.builder
    .appName("OptimizedJob")
    .config("spark.sql.adaptive.enabled", "true")
    .config("spark.sql.adaptive.coalescePartitions.enabled", "true")
    .config("spark.sql.adaptive.skewJoin.enabled", "true")
    .config("spark.serializer", "org.apache.spark.serializer.KryoSerializer")
    .config("spark.sql.shuffle.partitions", "200")
    .getOrCreate())

# Read with optimized settings
df = (spark.read
    .format("parquet")
    .option("mergeSchema", "false")
    .load("s3://bucket/data/"))

# Efficient transformations
result = (df
    .filter(F.col("date") >= "2024-01-01")
    .select("id", "amount", "category")
    .groupBy("category")
    .agg(F.sum("amount").alias("total")))

result.write.mode("overwrite").parquet("s3://bucket/output/")
```

## Patterns
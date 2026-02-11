---
version: 4.1.0-fractal
name: nosql-expert
description: "Expert guidance for distributed NoSQL databases (Cassandra, DynamoDB). Focuses on mental models, query-first modeling, single-table design, and avoiding hot partitions in high-scale systems."
---

# NoSQL Expert Patterns (Cassandra & DynamoDB)

## Overview

This skill provides professional mental models and design patterns for **distributed wide-column and key-value stores** (specifically Apache Cassandra and Amazon DynamoDB).

Unlike SQL (where you model data entities), or document stores (like MongoDB), these distributed systems require you to **model your queries first**.

## When to Use

- **Designing for Scale**: Moving beyond simple single-node databases to distributed clusters.
- **Technology Selection**: Evaluating or using **Cassandra**, **ScyllaDB**, or **DynamoDB**.
- **Performance Tuning**: Troubleshooting "hot partitions" or high latency in existing NoSQL systems.
- **Microservices**: Implementing "database-per-service" patterns where highly optimized reads are required.

## The Mental Shift: SQL vs. Distributed NoSQL

| Feature | SQL (Relational) | Distributed NoSQL (Cassandra/DynamoDB) |
| :--- | :--- | :--- |
| **Data modeling** | Model Entities + Relationships | Model **Queries** (Access Patterns) |
| **Joins** | CPU-intensive, at read time | **Pre-computed** (Denormalized) at write time |
| **Storage cost** | Expensive (minimize duplication) | Cheap (duplicate data for read speed) |
| **Consistency** | ACID (Strong) | **BASE (Eventual)** / Tunable |
| **Scalability** | Vertical (Bigger machine) | **Horizontal** (More nodes/shards) |

> **The Golden Rule:** In SQL, you design the data model to answer *any* query. In NoSQL, you design the data model to answer *specific* queries efficiently.

## Core Design Patterns

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Query-First Modeling (Access Patterns)](./sub-skills/1-query-first-modeling-access-patterns.md)
### 2. [2. The Partition Key is King](./sub-skills/2-the-partition-key-is-king.md)
### 3. [3. Clustering / Sort Keys](./sub-skills/3-clustering-sort-keys.md)
### 4. [4. Single-Table Design (Adjacency Lists)](./sub-skills/4-single-table-design-adjacency-lists.md)
### 5. [5. Denormalization & Duplication](./sub-skills/5-denormalization-duplication.md)
### 6. [Apache Cassandra / ScyllaDB](./sub-skills/apache-cassandra-scylladb.md)
### 7. [AWS DynamoDB](./sub-skills/aws-dynamodb.md)

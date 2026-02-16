# 4. "TypeOrmModule Unable to connect to the database"

**Frequency**: MEDIUM | **Complexity**: HIGH  
**Real Examples**: GitHub typeorm#1151, #520, #2692
Key insight - this error is often misleading:
1. Check entity configuration - @Column() not @Column('description')
2. For multiple DBs: Use named connections (GitHub #2692)
3. Implement connection error handling to prevent app crash (#520)
4. SQLite: Verify database file path (typeorm#8745)
# Complex Write API (Create Quiz from Categories)

See attached `create_quiz_from_categories.php` for a comprehensive example including:
- Multiple database insertions
- Course module creation
- Quiz instance configuration
- Random question selection with tags
- Group-based access restrictions
- Extensive error logging
- Transaction management

## Quick Reference: Common Moodle Tables

| Table | Purpose |
|-------|---------|
| `{user}` | User accounts |
| `{course}` | Courses |
| `{course_modules}` | Activity instances in courses |
| `{modules}` | Available activity types (quiz, forum, etc.) |
| `{quiz}` | Quiz configurations |
| `{quiz_attempts}` | Quiz attempt records |
| `{question}` | Question bank |
| `{question_categories}` | Question categories |
| `{grade_items}` | Gradebook items |
| `{grade_grades}` | Student grades |
| `{groups}` | Course groups |
| `{groups_members}` | Group memberships |
| `{logstore_standard_log}` | Activity logs |

## Additional Resources

- [Moodle External API Documentation](https://moodledev.io/docs/5.2/apis/subsystems/external/functions)
- [Moodle Coding Style](https://moodledev.io/general/development/policies/codingstyle)
- [Moodle Database API](https://moodledev.io/docs/5.2/apis/core/dml)
- [Web Services API Documentation](https://moodledev.io/docs/5.2/apis/subsystems/external)

## Guidelines

- Always validate input parameters using `validate_parameters()`
- Check user context and capabilities before operations
- Use parameterized SQL queries (never string concatenation)
- Implement comprehensive error handling and logging
- Follow Moodle naming conventions (lowercase, underscores)
- Document all parameters and return values clearly
- Test with different user roles and permissions
- Consider transaction safety for write operations
- Purge caches after service registration changes
- Keep API methods focused and single-purpose
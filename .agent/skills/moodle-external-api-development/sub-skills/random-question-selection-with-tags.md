# Random Question Selection with Tags

```php
private static function get_random_questions($categoryid, $tagname, $limit) {
    global $DB;
    
    $sql = "SELECT q.id
            FROM {question} q
            INNER JOIN {question_versions} qv ON qv.questionid = q.id
            INNER JOIN {question_bank_entries} qbe ON qbe.id = qv.questionbankentryid
            INNER JOIN {question_categories} qc ON qc.id = qbe.questioncategoryid
            JOIN {tag_instance} ti ON ti.itemid = q.id
            JOIN {tag} t ON t.id = ti.tagid
            WHERE LOWER(t.name) = :tagname
              AND qc.id = :categoryid
              AND ti.itemtype = 'question'
              AND q.qtype = 'multichoice'";
    
    $qids = $DB->get_fieldset_sql($sql, [
        'categoryid' => $categoryid,
        'tagname' => strtolower($tagname)
    ]);
    
    shuffle($qids);
    return array_slice($qids, 0, $limit);
}
```

## Testing Your API
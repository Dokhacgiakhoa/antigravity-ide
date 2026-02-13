# Writing Memory YARA Rules

```yara
rule Suspicious_Injection
{
    meta:
        description = "Detects common injection shellcode"

    strings:
        // Common shellcode patterns
        $mz = { 4D 5A }
        $shellcode1 = { 55 8B EC 83 EC }  // Function prologue
        $api_hash = { 68 ?? ?? ?? ?? 68 ?? ?? ?? ?? E8 }  // Push hash, call

    condition:
        $mz at 0 or any of ($shellcode*)
}

rule Cobalt_Strike_Beacon
{
    meta:
        description = "Detects Cobalt Strike beacon in memory"

    strings:
        $config = { 00 01 00 01 00 02 }
        $sleep = "sleeptime"
        $beacon = "%s (admin)" wide

    condition:
        2 of them
}
```
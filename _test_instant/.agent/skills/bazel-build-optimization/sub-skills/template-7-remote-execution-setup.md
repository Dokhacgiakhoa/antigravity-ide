# Template 7: Remote Execution Setup

```python
# platforms/BUILD.bazel
platform(
    name = "linux_x86_64",
    constraint_values = [
        "@platforms//os:linux",
        "@platforms//cpu:x86_64",
    ],
    exec_properties = {
        "container-image": "docker://gcr.io/myproject/bazel-worker:latest",
        "OSFamily": "Linux",
    },
)

platform(
    name = "remote_linux",
    parents = [":linux_x86_64"],
    exec_properties = {
        "Pool": "default",
        "dockerNetwork": "standard",
    },
)

# toolchains/BUILD.bazel
toolchain(
    name = "cc_toolchain_linux",
    exec_compatible_with = [
        "@platforms//os:linux",
        "@platforms//cpu:x86_64",
    ],
    target_compatible_with = [
        "@platforms//os:linux",
        "@platforms//cpu:x86_64",
    ],
    toolchain = "@remotejdk11_linux//:jdk",
    toolchain_type = "@bazel_tools//tools/jdk:runtime_toolchain_type",
)
```

## Performance Optimization

```bash
# Profile build
bazel build //... --profile=profile.json
bazel analyze-profile profile.json

# Identify slow actions
bazel build //... --execution_log_json_file=exec_log.json

# Memory profiling
bazel build //... --memory_profile=memory.json

# Skip analysis cache
bazel build //... --notrack_incremental_state
```

## Best Practices
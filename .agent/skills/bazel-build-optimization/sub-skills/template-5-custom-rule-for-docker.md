# Template 5: Custom Rule for Docker

```python
# tools/bazel/rules/docker.bzl
def _docker_image_impl(ctx):
    dockerfile = ctx.file.dockerfile
    base_image = ctx.attr.base_image
    layers = ctx.files.layers

    # Build the image
    output = ctx.actions.declare_file(ctx.attr.name + ".tar")

    args = ctx.actions.args()
    args.add("--dockerfile", dockerfile)
    args.add("--output", output)
    args.add("--base", base_image)
    args.add_all("--layer", layers)

    ctx.actions.run(
        inputs = [dockerfile] + layers,
        outputs = [output],
        executable = ctx.executable._builder,
        arguments = [args],
        mnemonic = "DockerBuild",
        progress_message = "Building Docker image %s" % ctx.label,
    )

    return [DefaultInfo(files = depset([output]))]

docker_image = rule(
    implementation = _docker_image_impl,
    attrs = {
        "dockerfile": attr.label(
            allow_single_file = [".dockerfile", "Dockerfile"],
            mandatory = True,
        ),
        "base_image": attr.string(mandatory = True),
        "layers": attr.label_list(allow_files = True),
        "_builder": attr.label(
            default = "//tools/docker:builder",
            executable = True,
            cfg = "exec",
        ),
    },
)
```
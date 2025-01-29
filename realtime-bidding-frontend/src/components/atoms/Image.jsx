/* eslint-disable @typescript-eslint/no-explicit-any */


export default function Image({
  props,
  alt = "",
  src = "",
  width = "",
  height = "",
  className = "",
  loading = "lazy",
  priority,
  unoptimized = false,
}) {
  return (
    <img
      {...props}
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      loading={loading}
      priority={priority}
      unoptimized={unoptimized}
    />
  );
}

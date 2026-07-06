/* CodeStarters cohost wordmark — keyed to the site's off-white so it
   reads on the dark background. Lives at /public/codestarters.png. */
export default function CodeStartersMark({
  className = "h-4",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/codestarters.png"
      alt="CodeStarters"
      width={308}
      height={47}
      className={`w-auto object-contain ${className}`}
    />
  );
}

export default function IconImages({ imageName, size, type, height }) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img src={`/${imageName}.${type}`} width={size} height={height} />
}

const shouldForwardProp: ShouldForwardPropType = (...props) => {
  return propName => !props.includes(propName)
}

type ShouldForwardPropType = (...props: string[]) => (propName: string) => boolean

export default shouldForwardProp

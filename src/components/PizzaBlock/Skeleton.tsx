import ContentLoader, {Instagram} from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="242" y="-13" rx="3" ry="3" width="410" height="6" /> 
    <circle cx="140" cy="178" r="125" /> 
    <rect x="0" y="0" rx="15" ry="15" width="280" height="26" /> 
    <rect x="0" y="337" rx="0" ry="0" width="280" height="74" /> 
    <rect x="0" y="432" rx="0" ry="0" width="120" height="50" /> 
    <rect x="155" y="432" rx="0" ry="0" width="120" height="50" />
  </ContentLoader>
)

export default Skeleton
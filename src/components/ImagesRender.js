import PropTypes from 'prop-types'
import ImageContainer from "./ImageContainer";
const ImagesRender =({images})=>{
    return (
        images.map(({id, download_url})=><ImageContainer key={id} imageUrl={download_url}/>)
    )
}
ImagesRender.propType = {
    images: PropTypes.shape({
        download_url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
}
export default ImagesRender;
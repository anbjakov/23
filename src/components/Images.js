import PropTypes from 'prop-types'
import ImageContainer from "./ImageContainer";
const Images =({images})=>{
    return (
        images.map(({id, download_url})=><ImageContainer key={id} imageUrl={download_url}/>)
    )
}
Images.propType = {
    images: PropTypes.shape({
        download_url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
}
export default Images;
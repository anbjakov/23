import { PropTypes } from "prop-types";

const ImageContainer = ({imageUrl,id})=>{
       return(
        <div className="w-50" key={id} >
                <img src={imageUrl} className="img-fluid border border-5 border-white h-auto" style={{backgroundColor: "grey"}}/>
            </div>
    )
}

ImageContainer.propTypes  = {
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number,
    }
export default ImageContainer
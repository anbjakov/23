import PropTypes from 'prop-types'
const Images =({images})=>{
    return (
        <div className="row">
            {
                images.map(({id, download_url})=>(
                    <div className="w-50" key={id}>
                    <img src={download_url}
                         className="img-fluid border border-5 border-white h-auto"
                         style={{backgroundColor: "grey"}}/>
                </div>))
            }
        </div>
    )
}
Images.propType = {
    images: PropTypes.shape({
        download_url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
}
export default Images;
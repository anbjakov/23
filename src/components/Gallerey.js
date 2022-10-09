import ImageContainer from "./ImageContainer";
import {useState, useEffect} from 'react';
import Spinner from "./Spinner";
import Button from  "./Button";
import Title from "./Title";
import ImagesRender from "./ImagesRender";
const Gallerey = ()=> {
    const [images, setImages] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`).
        then((response)=>response.json()).
        then((pageImagesArray)=> {
            setImages((nextImages)=>{
                nextImages = images.slice();
                nextImages.push(...pageImagesArray);
                return nextImages;
            })
        })
        setLoading(false);

        },[page])

        const increasePageNumber = ()=>{
        setPage((prevPage)=>prevPage+1)
        }
       if (isLoading) {
       return <Spinner/>
   }
    return (
        <div className="container text-center">
            <Title>IMAGE GALLERY</Title>
          <div className="row">
              <ImagesRender images={images}/>
        </div>
            <Button onClick={increasePageNumber}>Show more</Button>
        </div>
    )
}
export default Gallerey;
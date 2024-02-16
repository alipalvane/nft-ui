// eslint-disable-next-line react/prop-types
const Gif = ({src}) => {
  return (
    <div className="container-fluid position-relative ov">
        <div className="container-fluid container-xl mt-5 ">
            <div className="row row-gap-2">
                <img src={src} className="w-auto align-items-center m-auto"/>
            </div>

        </div>
        <div className="Ellipse_2">
        </div>
    </div>
  )
}

export default Gif
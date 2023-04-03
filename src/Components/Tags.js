const Tags = ({ title, data }) => {
  return (
    <>
      <div className='d-flex flex-column m-5 text-start' key={title}>
        <div className='fs-5'>{title}</div>
        <div className='fw-bold mousePointer'>All</div>
        {data?.length > 0 &&
          data?.map((obj) => {
            return <div className='mousePointer'>{obj?.name}</div>
          })}
      </div>
    </>
  )
}

export default Tags

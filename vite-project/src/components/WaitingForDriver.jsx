const WaitingForDriver = (props) => {
  return(
<div><h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => props.setWaitingForDriver(false)}
      >
        <i className=" text-3xl text-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex item-center justify-between">
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt="UBER-CAR"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Strot Jain</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP09 CS 2212</h4>
          <p className="text-sm text-gray-600 ">Maruti Suzukin Ertiga</p>
        </div></div>
        <div className="flex justify-between items-center flex-col ">
        <div className="w-full mt-5">
          <div className="flex item-center gap-5 p-3 border-b-2 ">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                kanakriya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 border-b-2 ">
          
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                kanakriya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 2 ">
            
            <i className="ri-bank-card-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
  </div>
      </div>
  )
}
export default WaitingForDriver;
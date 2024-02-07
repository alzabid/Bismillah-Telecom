/* eslint-disable react/prop-types */


const BankCard = (props) => {
    return (
      <div className="col-span-1 bg-white border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden text-anim2">
        <div className="p-5 flex items-center gap-4">
          <img
            className="h-20 w-20 rounded-lg shrink-0"
            src={props.img}
            alt=""
          />
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-slate-900">
                {props.name}
            
            </p>
            <p className="text-base font-medium text-slate-700">
                {props.title}
              
            </p>
          </div>
        </div>
        <div className="bg-slate-100 border-t-2 border-slate-200 space-y-2 p-5">
          <p className="text-base font-normal text-slate-800">
            <span className="block md:inline-block w-28 font-normal">
              Account Name:
            </span>
            <span className="block md:inline-block font-medium text-slate-900">
              Bismillah Telecom
            </span>
          </p>
          <p className="text-base text-slate-700">
            <span className="block md:inline-block w-28 font-normal">
              Account No:
            </span>
            <span className="block md:inline-block font-medium text-slate-900">
              110.110.27000
            </span>
          </p>
          <p className="text-base text-slate-700">
            <span className="block md:inline-block w-28 font-normal">
              Branch Name:
            </span>
            <span className="block md:inline-block font-medium text-slate-900">
              Dhanmondi Branch, Dhaka
            </span>
          </p>
          <p className="text-base text-slate-700">
            <span className="block md:inline-block w-28 font-normal">
              Routing Name:
            </span>
            <span className="block md:inline-block font-medium text-slate-900"></span>
          </p>
        </div>
      </div>
    );
};

export default BankCard;
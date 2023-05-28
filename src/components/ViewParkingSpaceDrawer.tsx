/** @format */
import React from 'react';
import { X } from 'tabler-icons-react';


const DetailItem = (props: any) => {
	return (
		<div className="flex justify-between items-center rounded-lg bg-gray-400 p-2 my-3">
			<div className="text-gray-700 font-semibold">{props.title}</div>
			<div className="text-sm">{props.value || '-'}</div>
		</div>
	);
};

const ViewParkingSpaceDrawer = () => {
	return (
		<div>
             <div className="flex justify-between rounded-lg bg-green-500 mt-2 px-5 mx-1">
                    <h2 className="my-auto text-center text-white font-lg ">Toptani parking center</h2>
                    <X className='w-10 h-10 cursor-pointer text-white' />
                </div>
			<div className="flex flex-col overflow-scroll mx-5">
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<hr />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<hr />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<DetailItem title="Spots free" value="29" />
				<hr />
			</div>
		</div>
	);
};
export default ViewParkingSpaceDrawer;

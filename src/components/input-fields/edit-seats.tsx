import React from 'react';
import { Input } from "../ui/input";
import EditSeatsModal from '../admin-components/edit-seats-modal';

type EditSeatsProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editSeats: React.FC<EditSeatsProps> = ({ onChange, value, ...rest }) => {
  return (<>
    <span>
      <EditSeatsModal/>
    </span>
    <Input
      label="Seats: "
      placeholder="2x2 (37)"
      className="bg-transparent border-white rounded-md py-6 pl-[70px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  </>);
};

export default editSeats;
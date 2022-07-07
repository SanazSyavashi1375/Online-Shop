import React from 'react';

const StatusNotification: React.FC<{ title: string }> = (props) => {
  return (
    <div className=" bg-gray-300 p-5">
      <p>{props.title} add to shopping card! </p>
    </div>
  );
};
export default StatusNotification;

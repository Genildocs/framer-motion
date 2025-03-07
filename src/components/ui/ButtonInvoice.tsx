import React from 'react';

export default function ButtonInvoice({
  name,
  style,
}: {
  name: string;
  style?: { buttonStyle: string };
}) {
  console.log(style);
  return <button className={`${style?.buttonStyle}`}>{name}</button>;
}

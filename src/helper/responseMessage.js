import { NextResponse } from "next/server";
import React from "react";

const getResponseMessage = (message, successStatus, statusCode) => {
  return NextResponse.json(
    {
      messsage: message,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};

export default getResponseMessage;

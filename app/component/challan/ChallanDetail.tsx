"use client";
import { ORG_ACC_DETAILS, ORGANIZATION_DETAILS } from "@/app/constant";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { BankDetails } from "./BankDetails";
import { Address } from "./Address";
import ChallanItems from "./ChallanItems";

export default function ChallanDetail({ challanById }) {
  challanById = JSON.parse(challanById);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const clientDetails = {
    name: `${challanById.clientName}`,
    address: `Address: ${challanById.clientAddress}`,
    gst: `Gst: ${challanById.clientGstin}`,
  };

  let productNameList = challanById.items;
  const challanNo = challanById.challanNo;
  const date = new Date(challanById.challanDate).toJSON().slice(0, 10).split("-").reverse().join("-");
return (
  <>
    <section
      className="py-3 py-md-5"
      style={{ display: "none1" }}
      ref={componentRef}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-12 col-xxl-7">
            <div className="row gy-3 mb-3">
              {/* <div className="col-6">
                                <a
                                    style={{
                                        backgroundColor: "golden",
                                        // border: "2px solid red",
                                    }}
                                    className="d-block text-end"
                                    href="#!"
                                ></a>
                            </div> */}
              <div className="col-9">
                <h4>From</h4>
                <Address data={ORGANIZATION_DETAILS} />
              </div>
              <div className="col-3 text-end">
                <h6>Challan No: {challanNo}</h6>
                <h6>Date : {date}</h6>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-sm-6 col-md-8">
                <h4>Bill To</h4>
                <Address data={clientDetails} />
              </div>
              <BankDetails data={ORG_ACC_DETAILS} challanNo={challanNo} />
            </div>
            <div className="row mb-3">
              <ChallanItems
                productNameList={productNameList}
                gstPer={challanById.gstPercentage}
                gstAmount={challanById.gstAmount}
                subTotal={challanById.total}
                grandTotal={challanById.grandTotal}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-3 py-md-5">
        <div className="container">
            <div className="row">
        <button onClick={handlePrint} className="btn btn-default">Print</button>
        </div>
        </div>
        </section>
  </>
);
}

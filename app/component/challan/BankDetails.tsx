export const BankDetails = ({ data }) => {
    if (!data) return null;
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="row">
          {/* <span className="col-6"><strong>Challan No</strong></span>
          <span className="col-6 text-sm-end">#{challanNo}</span> */}
          {Object.keys(data).map((key) => (
            <>
              <span className="col-6"><strong>{key}</strong></span>
              <span className="col-6 text-sm-end">{data?.[key]}</span>
            </>
          ))}
        </div>
      
      </div>
    );
  };
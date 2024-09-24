export default function ChallanItems({productNameList, gstPer, subTotal, gstAmount, grandTotal}) {
  return (
    <div className="col-12">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase">
                Qty
              </th>
              <th scope="col" className="text-uppercase">
                Product
              </th>
              <th scope="col" className="text-uppercase text-end">
                Unit Price
              </th>
              <th scope="col" className="text-uppercase text-end">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {productNameList &&
              productNameList.map((product) => (
                <tr key={index}>
                  <th scope="row">{product.quantity}</th>
                  <td>{product.product}</td>
                  <td className="text-end">{(product.unitPrice || 0 ).toFixed(2)}</td>
                  <td className="text-end">
                    {((product.unitPrice * product.quantity) || 0 ).toFixed(2)} 
                  </td>
                </tr>
              ))}

            <tr>
              <td colSpan="3" className="text-end">
                Subtotal
              </td>
              <td className="text-end">{subTotal.toFixed(2)}</td>
            </tr>

            <tr>
              <td colSpan="3" className="text-end">
                SGCT | CGST | IGST ({gstPer}%)
              </td>
              <td className="text-end">{gstAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <th scope="row" colSpan="3" className="text-uppercase text-end">
                Total
              </th>
              <td className="text-end">${grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

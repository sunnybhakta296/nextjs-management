export const Address = ({ data }) => {
    if (!data) return null;
    return (
      <address>
        <strong>{data.name}</strong>
        <br />
        {data.address && (
          <>
            {data.address}
            <br />
          </>
        )}
        {data.gst && (
          <>
            {data.gst}
            <br />
          </>
        )}
        {data.phone && (
          <>
            {data.phone}
            <br />
          </>
        )}
        {data.email && (
          <>
            {data.email}
            <br />
          </>
        )}
        {data.website && (
          <>
            {data.website}
            <br />
          </>
        )}
      </address>
    );
  };
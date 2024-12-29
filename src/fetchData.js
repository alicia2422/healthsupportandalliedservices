const fetchData = async (
  url,
  onSuccess,
  onFail,
  method = "GET",
  body,
  token
) => {
  const reqObj = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    reqObj.headers.token = token;
  }
  if (method !== "GET") {
    reqObj.body = JSON.stringify(body || {});
  }
  try {
    const res = await fetch(url, reqObj);
    const data = await res.json();
    if (data.success) {
      onSuccess();
    } else {
      onFail();
    }
  } catch (err) {
    console.log(err.message);
    onFail(err.message);
  }
};

export default fetchData;

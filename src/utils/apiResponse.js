class apiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode<400   //here status code represent the status on  the server side

    }
}
export {apiResponse}
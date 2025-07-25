class ApiResponse {
    constructor(statusCode, data, message = "Success"){//jyadatar successcode hi hoga
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
        
    }
}

export { ApiResponse }
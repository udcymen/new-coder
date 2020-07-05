package com.newcoder.exception;

public class ResourceNotFoundException extends RuntimeException {
    /**
	 *
	 */
	private static final long serialVersionUID = 90026614827330135L;

	public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

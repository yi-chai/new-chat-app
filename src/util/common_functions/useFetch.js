import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
  useEffect(() => {
    async function fetchUsers() {
        setIsFetching(true);
        try {
            
        }
        catch (error) {
            setError({ message: error.message || 'Failed to fetch'})
        }
    }

    
  }, []);
}

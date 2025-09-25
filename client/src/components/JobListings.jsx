import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const JobListings = () => {

  const {isSearched, searchFilter} = useContext(AppContext);
    
  return (
    <div>
      {/* Sidebar */}
      <div>
        {/* Search Filter from Hero Component */}
        {
            isSearched && ( searchFilter.title !== "" || searchFilter.location !== "") && (
                <>
                    <h3>Current Search</h3>
                </>
            )
        }
      </div>
    </div>
  )
}

export default JobListings

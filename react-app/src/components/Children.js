import React from 'react';

const Children = ({match})=>{
    return(
        <div>
            {
                match?match.params.num:0
            }
            children页面
        </div>
    )

}

export default Children;
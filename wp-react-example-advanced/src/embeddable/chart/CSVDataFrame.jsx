import React from "react";


const LineData = ({children, data}) => {
    const {data: json, meta: {fields}} = data
    const index = fields[0]
    const keys = fields.slice(1)
    const options = {
        indexBy: index,
        keys: keys,
        data: json
    }
    return React.Children.map(children, child => React.cloneElement(child, {options}))
}


const BarData = ({children, data}) => {
    const {data: json, meta: {fields}} = data
    const index = fields[0]
    const keys = fields.slice(1)
    const options = {
        indexBy: index,
        keys: keys,
        data: json
    }
    return React.Children.map(children, child => React.cloneElement(child, {options}))
}


const CSVDataFrame = ({children, data, keys, type}) => {

    if (type == 'bar') {
        return <BarData data={data} keys={keys}>{children}</BarData>
    }
    if (type == 'line') {
        return <LineData data={data} keys={keys}>{children}</LineData>
    }

}

export default CSVDataFrame;
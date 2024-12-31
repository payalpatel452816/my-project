import React from 'react'

const AdditionalInformation = () => {
  return (
    <div className="container mx-auto px-4  py-6">
      <section className="space-y-6 m-6 ">

        <table className="min-w-full table-auto border ">
          <tbody>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">Size</th>
              <td >
                <p className="border-b border-gray-300 px-4 py-2">S, M, L, XL</p></td>
            </tr>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">
              Color</th>
              <td className="border-b border-gray-300 px-4 py-2">White, Pink, Black</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    
  )
}

export default AdditionalInformation
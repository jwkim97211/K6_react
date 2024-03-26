export default function TailButton({caption, color, handleClick}) {
    const colorObj = {
      'blue' : 'bg-blue-700' ,
      'red'  : 'bg-red-700' ,
      'purple' : 'bg-purple-700',
      'lime' : 'bg-lime-700'
    }

    const hoverObj = {
      'blue' : 'hover:bg-blue-900' ,
      'red'  : 'hover:bg-red-900' ,
      'purple' : 'hover:bg-purple-900',
      'lime' : 'hover:bg-lime-900'
    }

    const bColor = `px-4 py-2 m-2 rounded-md text-white w-full
                    ${colorObj[color]}
                    ${hoverObj[color]}`

    return (
      <button className= {bColor}
              onClick={handleClick}>
        {caption}
      </button>
    )
  }

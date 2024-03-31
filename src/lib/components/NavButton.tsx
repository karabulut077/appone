
'use client'
 
export default function NavButton({ handleClick, category }: 
  { handleClick: Function, category: string }) {
  return (
    <>
      <button
        onClick={ async () => {
          await handleClick(category);
        }}
      >
        {category}
      </button>
    </>
  )
}
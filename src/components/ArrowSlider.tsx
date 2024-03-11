export const NextArrow = (props: any) => {
   const { className, style, onClick } = props
   return (
      <div
         className={className}
         style={{
            ...style,
            display: 'block',
            color: '#3c82f6',
            fontSize: '50px',
         }}
         onClick={onClick}
      />
   )
}

export const PrevArrow = (props: any) => {
   const { className, style, onClick } = props
   return (
      <div
         className={className}
         style={{
            ...style,
            display: 'block',
            color: '#3c82f6',
            fontSize: '50px',
         }}
         onClick={onClick}
      />
   )
}

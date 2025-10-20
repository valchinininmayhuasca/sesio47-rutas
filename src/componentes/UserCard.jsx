
export function UserCard({ imagen, nombre, cargo }) {
  return (
    // Contenedor: redondeado, fondo celeste, borde azul, max-ancho (aprox 9cm)
    <div className="flex flex-col items-center p-4 bg-blue-100 border-2 border-blue-500 rounded-xl shadow-lg max-w-sm mx-auto">
      
      {/* Imagen: tamaño fijo size-24 (96px, ~2.54cm). Si se requieren los límites de 5-8cm de forma estricta,
          habría que usar clases personalizadas de CSS o `min-w`, `max-w` con valores en rem.
          `object-cover` y `rounded-full` son para darle un buen estilo a la imagen de perfil.
      */}
      <img 
        src={imagen} 
        alt={`Imagen de perfil de ${nombre}`} 
        className="size-24 rounded-full object-cover mb-3 min-w-[4cm] max-w-[8cm] min-h-[4cm] max-h-[8cm]"
      />
      
      {/* Nombre: texto entre 20px y 25px (usamos text-2xl que es ~24px, justo en el rango) */}
      <h3 className="text-2xl font-semibold text-gray-900 text-[22px] max-text-[25px]">
        {nombre}
      </h3>
      
      {/* Cargo: color rojo y mínimo 16px (usamos text-base que es ~16px) */}
      <h4 className="text-red-600 text-base font-medium">
        {cargo}
      </h4>
    </div>
  );
}
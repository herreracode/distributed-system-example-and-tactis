#!/bin/bash
#TODO: FIXED

# Verificar si netstat está instalado
if ! command -v netstat &> /dev/null; then
    echo "netstat no está instalado. Instalando..."
    sudo apt-get update
    sudo apt-get install -y net-tools
fi

# Función para obtener todos los puertos disponibles
get_available_ports() {
    netstat -tuln | grep LISTEN | awk '{print $4}' | awk -F':' '{print $NF}' | sort -n | uniq
}

# Nombre de las variables de entorno
variables=("PREDICTION" "GAMES" "REWARDS")

# Obtener puertos disponibles
available_ports=($(get_available_ports))

# Verificar si hay suficientes puertos disponibles
if [ ${#available_ports[@]} -lt ${#variables[@]} ]; then
    echo "No hay suficientes puertos disponibles para asignar a todas las variables."
    exit 1
fi

# Imprimir puertos disponibles
echo "Puertos disponibles:"
printf '%s\n' "${available_ports[@]}"

# Escribir las variables de entorno en el archivo .env
for ((i=0; i<${#variables[@]}; i++)); do
    echo "APP_FORWARD_PORT_${variables[i]}=${available_ports[i]}" >> .env
done

# Verificar las variables de entorno asignadas
echo "Variables de entorno asignadas:"
cat .env

# Renombrar el archivo .env.example a .env
mv .env.example .env

# Ejecutar docker-compose up --build -d docker-compose up --build -d

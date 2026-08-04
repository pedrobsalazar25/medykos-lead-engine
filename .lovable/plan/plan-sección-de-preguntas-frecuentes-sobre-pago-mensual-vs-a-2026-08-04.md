# Plan: Sección de Preguntas Frecuentes sobre Pago Mensual vs Anual

## Objetivo
Añadir un grupo específico de preguntas frecuentes dentro de la sección FAQ existente para aclarar dudas sobre los planes de pago mensual y anual, usando únicamente la información disponible en el proyecto.

## Cambios propuestos

### 1. FAQ.tsx — Nuevo grupo de preguntas sobre pagos
Dentro del componente `src/components/FAQ.tsx`, agregar un segundo bloque titulado **"Pago mensual vs Pago anual"** debajo del acordeón general existente. Incluirá 4 ítems:

1. **¿Cuál es la diferencia entre pago mensual y pago anual?**
   - Pago anual: pago único por el precio base del paquete.
   - Pago mensual: el precio base se incrementa en $70 USD y se divide en 12 cuotas mensuales sin interés.

2. **¿Qué ocurre cuando termina el período de pago?**
   - Responder con la información disponible: el pago anual es un pago único; para dudas sobre renovación, invitar al contacto por WhatsApp.

3. **¿Puedo cancelar antes de terminar las 12 cuotas?**
   - Indicar que las condiciones de cancelación se coordinan directamente por WhatsApp, ya que no hay una política publicada en el sitio.

4. **¿Qué métodos de pago aceptan?**
   - Indicar que los métodos de pago disponibles se confirman al solicitar información, usando el canal de contacto principal del sitio (WhatsApp).

### 2. Estilo y estructura
- Mantener el estilo visual del acordeón existente (tarjetas redondeadas, sombra suave, animaciones con Framer Motion).
- Usar un subtítulo o etiqueta para diferenciar el nuevo grupo del FAQ general.
- No agregar información inventada ni políticas que no estén en el código o la memoria del proyecto.

### 3. Verificación
- Ejecutar `bun run build` para confirmar que el componente compila sin errores.
- Revisar visualmente la sección FAQ en el preview para asegurar que el nuevo grupo se integra correctamente.

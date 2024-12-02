import os
from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    fecha_nac = models.DateField()
    #carga de archivos
    foto = models.ImageField(upload_to='clientes_fotos/', blank=True, null=True)

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

    #elimnar fotos junto con el clientes
    def delete(self, *args, **kwargs):
        if self.foto:
            if os.path.isfile(self.foto.path):
                os.remove(self.foto.path)
        super().delete(*args, **kwargs)

    
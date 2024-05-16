package com.example.command.dto.item;

import com.example.command.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

// додатковий клас щоб мформувати json він вкладається в ItemDto
@Getter
@Setter
public class ColorAndIdDto {
    private String color;
    private String productId;

    ColorAndIdDto(){}
    public ColorAndIdDto(String color, String productId){
        this.color = color;
        this.productId = productId;
    }


    // перевизначаю метод equals щоб при затосуванні SET знаходилися унікальні кольори
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ColorAndIdDto colorAndIdDto = (ColorAndIdDto) o;
        return Objects.equals(color, colorAndIdDto.color);
    }
    @Override
    public int hashCode() {
        return Objects.hash(color);
    }
}

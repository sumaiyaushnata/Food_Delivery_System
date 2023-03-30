package com.example.BackendFDS.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Data
@Entity
@Table(name="food")
public class FoodEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String food_code;
	private String food_name;
	private String orgin;
	private String restaurant;
	private int price;
	private String category;
	private String image;
	private String food_description;

	private int discount;
	private int quantity;

	
	
	
	
	public String getRestaurant() {
		return restaurant;
	}


	public void setRestaurant(String restaurant) {
		this.restaurant = restaurant;
	}


	public String getFood_description() {
		return food_description;
	}


	public void setFood_description(String food_description) {
		this.food_description = food_description;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFood_code() {
		return food_code;
	}


	public void setFood_code(String food_code) {
		this.food_code = food_code;
	}


	public String getFood_name() {
		return food_name;
	}


	public void setFood_name(String food_name) {
		this.food_name = food_name;
	}


	public String getOrgin() {
		return orgin;
	}


	public void setOrgin(String orgin) {
		this.orgin = orgin;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public int getDiscount() {
		return discount;
	}


	public void setDiscount(int discount) {
		this.discount = discount;
	}


	public FoodEntity() {
		super();
		

}
}

import React, { useEffect } from 'react'
import BookCard from '../../components/BookCard'
import CategoryCard from '../../components/CategoryCard'
import { v4 as uuidv4 } from 'uuid'

export default function Category() {
	const book = {
		_id:"12",
		thumbnailUrl:
			'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_29246.jpg',
		title: 'Dạy sao cho trẻ nghe lời',
		price: 70000,
		sale: 0.3,
		sold: 10,
	}

	useEffect(() =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	},[])

	return (
		<div className='p-2'>
			<CategoryCard title='Truyện trinh thám' description='Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnhq'>
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
			</CategoryCard>
			<CategoryCard title='Thể loại' description='Alabama'>
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
			</CategoryCard>
			<CategoryCard title='Thể loại 2' description='Alabama'>
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
				<BookCard key={uuidv4()} {...book} />
			</CategoryCard>
		</div>
	)
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header */}
      <header className="bg-coffee-900 text-coffee-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={32} className="text-coffee-300" />
              <h1 className="text-2xl font-serif font-bold">Кофе-Читы</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="hover:text-coffee-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#coffee"
                className="hover:text-coffee-300 transition-colors"
              >
                Кофе
              </a>
              <a
                href="#desserts"
                className="hover:text-coffee-300 transition-colors"
              >
                Десерты
              </a>
              <a
                href="#about"
                className="hover:text-coffee-300 transition-colors"
              >
                О компании
              </a>
              <a
                href="#order"
                className="hover:text-coffee-300 transition-colors"
              >
                Заказать
              </a>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 bg-gradient-to-br from-coffee-100 to-coffee-200"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-coffee-900 mb-6">
                Уютная кофейня с доставкой на дом
              </h2>
              <p className="text-xl text-coffee-700 mb-8">
                Свежеобжаренный кофе и домашние десерты прямо к вашему порогу.
                Создаем моменты тепла и уюта в каждой чашке.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать доставку
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-white"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7d512bf5-60ff-47f6-b987-d391792862d1.jpg"
                alt="Уютная кофейня"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-coffee-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Доставка 30-45 мин</p>
                <p className="text-xs opacity-90">Бесплатно от 1000₽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Section */}
      <section id="coffee" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-coffee-900 mb-4">
              Наш кофе
            </h3>
            <p className="text-lg text-coffee-700">
              Тщательно отобранные зерна со всего мира
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Coffee" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    320₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Эспresso</CardTitle>
                <CardDescription>
                  Крепкий и насыщенный, с бархатистой крема
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Coffee" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    420₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Cappuccino</CardTitle>
                <CardDescription>
                  Идеальный баланс эспрессо и молочной пенки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Coffee" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    480₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Latte</CardTitle>
                <CardDescription>
                  Нежный кофе с молоком и легкой пенкой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section id="desserts" className="py-16 bg-coffee-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-coffee-900 mb-4">
              Десерты
            </h3>
            <p className="text-lg text-coffee-700">
              Домашние сладости к вашему кофе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Cake" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    280₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Чизкейк</CardTitle>
                <CardDescription>
                  Нежный сливочный чизкейк с ягодами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Cookie" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    180₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Тирамису</CardTitle>
                <CardDescription>
                  Классический итальянский десерт с кофе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Candy" size={40} className="text-coffee-600" />
                  <span className="text-2xl font-bold text-coffee-900">
                    220₽
                  </span>
                </div>
                <CardTitle className="text-coffee-900">Брауни</CardTitle>
                <CardDescription>Шоколадный брауни с орехами</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700">
                  <Icon name="Plus" size={16} className="mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold text-coffee-900 mb-6">
                О нашей кофейне
              </h3>
              <p className="text-lg text-coffee-700 mb-6">
                Мы начинали как небольшая семейная кофейня в 2018 году с мечтой
                делиться лучшими сортами кофе с нашими соседями. Сегодня мы
                гордимся тем, что доставляем свежесваренный кофе прямо к вашему
                дому.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-coffee-700">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-600 mb-2">
                    10k+
                  </div>
                  <div className="text-sm text-coffee-700">
                    довольных клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-600 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-coffee-700">сортов кофе</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-coffee-700">доставка</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-coffee-900 text-coffee-50">
                <CardHeader>
                  <CardTitle className="text-coffee-300">
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-coffee-300" />
                    <span>Быстрая доставка 30-45 минут</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} className="text-coffee-300" />
                    <span>Качество гарантировано</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Heart" size={20} className="text-coffee-300" />
                    <span>Сделано с любовью</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Truck" size={20} className="text-coffee-300" />
                    <span>Доставка по всему городу</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 bg-coffee-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-coffee-900 mb-4">
              Оформить заказ
            </h3>
            <p className="text-lg text-coffee-700">
              Заполните форму, и мы свяжемся с вами
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-coffee-900">Детали заказа</CardTitle>
                <CardDescription>
                  Укажите ваши данные для доставки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Адрес доставки</Label>
                  <Input id="address" placeholder="Улица, дом, квартира" />
                </div>
                <div>
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания..."
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={20} className="text-coffee-600" />
                  <span className="text-sm text-coffee-700">
                    Доставляем в радиусе 15 км от центра города
                  </span>
                </div>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700 text-lg py-6">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-900 text-coffee-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Coffee" size={32} className="text-coffee-300" />
                <h4 className="text-xl font-serif font-bold">Кофе-Читы</h4>
              </div>
              <p className="text-coffee-300">
                Уютная кофейня с доставкой лучшего кофе прямо к вашему дому
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <div className="space-y-2 text-coffee-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kofe-chity.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Кофейная, 15</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Режим работы</h5>
              <div className="space-y-2 text-coffee-300">
                <div>Пн-Пт: 7:00 - 23:00</div>
                <div>Сб-Вс: 8:00 - 24:00</div>
                <div>Доставка: 24/7</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Социальные сети</h5>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-coffee-300 hover:text-coffee-100 cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-coffee-300 hover:text-coffee-100 cursor-pointer"
                />
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="text-coffee-300 hover:text-coffee-100 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-coffee-800 mt-8 pt-8 text-center text-coffee-300">
            <p>&copy; 2024 Кофе-Читы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

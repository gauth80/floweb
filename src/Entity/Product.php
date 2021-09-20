<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class,readOnly=true)
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     */
    private $selling_price;

    /**
     * @ORM\Column(type="integer")
     */
    private $availlable_storage;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $product_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title_img;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url_path;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $alter_text;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSellingPrice(): ?float
    {
        return $this->selling_price;
    }

    public function setSellingPrice(float $selling_price): self
    {
        $this->selling_price = $selling_price;

        return $this;
    }

    public function getAvaillableStorage(): ?int
    {
        return $this->availlable_storage;
    }

    public function setAvaillableStorage(int $availlable_storage): self
    {
        $this->availlable_storage = $availlable_storage;

        return $this;
    }

    public function getProductName(): ?string
    {
        return $this->product_name;
    }

    public function setProductName(string $product_name): self
    {
        $this->product_name = $product_name;

        return $this;
    }

    public function getTitleImg(): ?string
    {
        return $this->title_img;
    }

    public function setTitleImg(string $title_img): self
    {
        $this->title_img = $title_img;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getAlterText(): ?string
    {
        return $this->alter_text;
    }

    public function setAlterText(string $alter_text): self
    {
        $this->alter_text = $alter_text;

        return $this;
    }
}

class Comment < ApplicationRecord
  belongs_to :article
  validates :text, presence: true, length: {maximum: 100}
end
